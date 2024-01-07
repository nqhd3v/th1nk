import request from "@/helper/request";
import useStates from "@/hooks/use-states";
import { getCurrentWeather, getInitialData } from "@/services/client";
import { TWrapComponent } from "@/types";
import { TOpenWeatherData } from "@/types/open-weather";
import React, { useContext } from "react";

export interface IAppContext {
  weather: {
    data?: TOpenWeatherData;
    loading: boolean;
  };
  cmdMode: "cmd" | "writer";
  handleGetData: (payload: TAppGetDataPayload) => void | Promise<void>;
  handleSetData: (payload: TAppSetDataPayload) => void;
}

type TAppGetDataPayload = {
  cmd: "initial";
  payload?: Record<string, string | number | boolean>;
};

type TAppSetDataPayload = {
  cmd: "cmd";
  payload: IAppContext["cmdMode"];
};

const AppContext = React.createContext<IAppContext>({
  weather: {
    loading: false,
  },
  cmdMode: "cmd",
  handleGetData: () => undefined,
  handleSetData: () => undefined,
});

const AppProvider: React.FC<TWrapComponent> = ({ children }) => {
  const [{ weather, weatherLoading, cmdMode }, setStates] = useStates<{
    weather?: any;
    weatherLoading: boolean;
    cmdMode: IAppContext["cmdMode"];
  }>({
    weatherLoading: false,
    cmdMode: "cmd",
  });
  const handleGetData = async ({ cmd }: TAppGetDataPayload) => {
    if (cmd === "initial") {
      request(getInitialData, {
        onData: (d) => setStates({ weather: d.weather }),
      });
      return;
    }
    // if (cmd === "weather") {
    //   request(getCurrentWeather, {
    //     onData: (d) => setStates({ weather: d }),
    //   });
    //   return;
    // }
  };
  const handleSetData = ({ cmd, payload }: TAppSetDataPayload) => {
    if (cmd === "cmd") {
      setStates({ cmdMode: payload });
      return;
    }
  };

  return (
    <AppContext.Provider
      value={{
        weather: { data: weather, loading: weatherLoading },
        cmdMode,
        handleGetData,
        handleSetData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useApp = () => useContext(AppContext);
