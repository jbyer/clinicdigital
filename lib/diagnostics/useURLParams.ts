import { useSearchParams } from 'next/navigation'

/**
 * Custom hook to extract and decode URL parameters from marketing email links.
 * Supports:
 * - company_name: The practice name parameter (commonly used in email marketing)
 * - name: Alternative parameter name for practice name
 * 
 * Returns the decoded practice name or empty string if not found
 */
export function useURLParams() {
  const searchParams = useSearchParams()
  
  // Check for company_name parameter first (primary source from email marketing),
  // then fall back to 'name' parameter
  const companyName = searchParams.get('company_name') || searchParams.get('name') || ''
  
  // Decode URI component to handle encoded spaces and special characters
  return {
    practiceName: decodeURIComponent(companyName),
  }
}
