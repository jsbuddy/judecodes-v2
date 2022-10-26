import { createContext, useContext } from "react";
import mixpanel from "mixpanel-browser";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const debug = process.env.NODE_ENV === 'development';

export const MixpanelContext = createContext({
  track: () => null
});

export const MixpanelProvider = ({ children }) => {
  mixpanel.init(token, { debug, ignore_dnt: true });

  const track = (event, properties = {}) => {
    try {
      mixpanel.track(event, {
        source: document.referrer,
        ...properties
      });
    } catch (e) {
      console.log('Mixpanel error', e);
    }
  }

  return <MixpanelContext.Provider value={ { track } }>{ children }</MixpanelContext.Provider>
};

export const useMixpanel = () => {
  return useContext(MixpanelContext);
};
