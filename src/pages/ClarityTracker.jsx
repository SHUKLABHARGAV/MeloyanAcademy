import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import clarity from "@microsoft/clarity";

const ClarityTracker = () => {
  const location = useLocation();

  useEffect(() => {
    clarity.set("page", location.pathname);
  }, [location]);

  return null;
};

export default ClarityTracker;
