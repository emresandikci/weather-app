import { useEffect, useState } from 'react';

interface GeoLocationData {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  asn: string;
  org: string;
}

export default function useGetIp(): GeoLocationData | null {
  const [ip, setIp] = useState<GeoLocationData | null>(null);

  const getIp = async () => {
    const response = await fetch('https://ipapi.co/json').then((resonse) => resonse.json());
    setIp(response);
  };

  useEffect(() => {
    getIp();
  }, []);

  return ip;
}
