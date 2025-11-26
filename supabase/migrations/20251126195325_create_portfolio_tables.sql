/*
  # Portfolio Database Schema

  ## Tables Created
  
  ### contact_messages
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Visitor name
  - `email` (text) - Visitor email
  - `message` (text) - Contact message
  - `created_at` (timestamptz) - Timestamp of submission
  
  ### project_views
  - `id` (uuid, primary key) - Unique identifier
  - `project_name` (text) - Name of the project viewed
  - `viewed_at` (timestamptz) - Timestamp of view
  
  ## Security
  - RLS enabled on all tables
  - Public can insert into contact_messages (for contact form)
  - Public can insert into project_views (for analytics)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name text NOT NULL,
  viewed_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can log project views"
  ON project_views
  FOR INSERT
  TO anon
  WITH CHECK (true);