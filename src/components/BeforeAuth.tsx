import React, { useState } from "react";
import Auth from "../components/Auth";
import Loading from "../components/Loading";

export const BeforeAuth: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return <>{isLoading ? <Loading /> : <Auth />}</>;
};
