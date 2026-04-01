-- Create chatbot_onboarding table for storing form submissions
CREATE TABLE IF NOT EXISTS public.chatbot_onboarding (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Practice Information (Step 1)
  practice_name TEXT NOT NULL,
  practice_type TEXT NOT NULL,
  practice_type_other TEXT,
  practice_size TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  website_url TEXT,
  
  -- Scheduling Information (Step 2)
  appointment_types TEXT[], -- Array of appointment types
  business_hours JSONB, -- JSON object with day -> hours mapping
  cancellation_policy TEXT,
  
  -- Chatbot Features (Step 3)
  selected_features TEXT[], -- Array of selected feature IDs
  
  -- Additional Details (Step 4)
  common_questions TEXT,
  services_treatments TEXT,
  brand_voice TEXT,
  additional_notes TEXT,
  
  -- Metadata
  status TEXT DEFAULT 'pending', -- pending, in_progress, completed
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.chatbot_onboarding ENABLE ROW LEVEL SECURITY;

-- Create policy for public inserts (no auth required for form submissions)
CREATE POLICY "Allow public inserts" ON public.chatbot_onboarding
  FOR INSERT
  WITH CHECK (true);

-- Create policy for admin access (service role can do everything)
CREATE POLICY "Allow service role full access" ON public.chatbot_onboarding
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create index on email for lookups
CREATE INDEX IF NOT EXISTS idx_chatbot_onboarding_email ON public.chatbot_onboarding(contact_email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_chatbot_onboarding_status ON public.chatbot_onboarding(status);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_chatbot_onboarding_updated_at ON public.chatbot_onboarding;

CREATE TRIGGER update_chatbot_onboarding_updated_at
  BEFORE UPDATE ON public.chatbot_onboarding
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
