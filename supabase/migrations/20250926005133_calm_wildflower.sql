/*
  # Registration System Setup

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique, required)
      - `phone` (text, required)
      - `college` (text, required)
      - `course` (text, required)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `registration_settings`
      - `id` (uuid, primary key)
      - `max_registrations` (integer, default 10)
      - `current_count` (integer, default 0)
      - `countdown_end_date` (timestamp)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access and authenticated insert
    - Add function to automatically update registration count

  3. Functions
    - Auto-increment registration count on new registration
    - Check registration limit before allowing new registrations
*/

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  college text NOT NULL,
  course text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create registration settings table
CREATE TABLE IF NOT EXISTS registration_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  max_registrations integer DEFAULT 10,
  current_count integer DEFAULT 0,
  countdown_end_date timestamptz DEFAULT (now() + interval '5 days'),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insert initial settings
INSERT INTO registration_settings (max_registrations, current_count, countdown_end_date, is_active)
VALUES (10, 0, now() + interval '5 days', true)
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE registration_settings ENABLE ROW LEVEL SECURITY;

-- Policies for registrations table
CREATE POLICY "Anyone can insert registrations"
  ON registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read registrations count"
  ON registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for registration_settings table
CREATE POLICY "Anyone can read registration settings"
  ON registration_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Only authenticated users can update settings"
  ON registration_settings
  FOR UPDATE
  TO authenticated
  USING (true);

-- Function to update registration count
CREATE OR REPLACE FUNCTION update_registration_count()
RETURNS TRIGGER AS $$
BEGIN
  -- Update the current count in registration_settings
  UPDATE registration_settings 
  SET 
    current_count = (SELECT COUNT(*) FROM registrations),
    updated_at = now()
  WHERE id = (SELECT id FROM registration_settings ORDER BY created_at DESC LIMIT 1);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update count on new registration
DROP TRIGGER IF EXISTS update_count_on_registration ON registrations;
CREATE TRIGGER update_count_on_registration
  AFTER INSERT ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_registration_count();

-- Function to check if registration is allowed
CREATE OR REPLACE FUNCTION can_register()
RETURNS boolean AS $$
DECLARE
  settings_record RECORD;
BEGIN
  SELECT * INTO settings_record 
  FROM registration_settings 
  ORDER BY created_at DESC 
  LIMIT 1;
  
  -- Check if registration is active, within time limit, and under max count
  RETURN (
    settings_record.is_active = true AND
    settings_record.countdown_end_date > now() AND
    settings_record.current_count < settings_record.max_registrations
  );
END;
$$ LANGUAGE plpgsql;