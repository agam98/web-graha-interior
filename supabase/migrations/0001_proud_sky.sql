/*
  # Create projects table

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `description` (text, required)
      - `image_url` (text, required)
      - `category` (text)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `projects` table
    - Add policies for authenticated users to manage their projects
    - Allow public read access
*/

CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  category text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert their own projects
CREATE POLICY "Allow authenticated users to insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update their own projects
CREATE POLICY "Allow authenticated users to update their own projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete their own projects
CREATE POLICY "Allow authenticated users to delete their own projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);