import { createContext, useEffect, useState } from "react";
import { CryptosProps } from "../components/props/propsType";

interface ChildrenProps {
  children: React.ReactNode;
}

type ContextProps = {
  cryptos: any;
  cryptoHighChange: any;
  cryptoLowChange: any;
  lastListingCrypto: any;
  topVolume: any;
  buyOrSell: boolean;
  setBuyOrSell: (newState: boolean) => void;
  priceCryptoSelect: number;
  setPriceCryptoSelect: (newState: number) => void;
  amountBuy: number;
  setAmountBuy: (newState: number) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  responseSearchData: string;
  setResponseSearchData: (newState: string) => void;
  searchData: string;
  setSearchData: (newState: string) => void;
};

const initialValue = {
  cryptos: [],
  cryptoHighChange: [],
  setCryptoHighChange: () => {},
  cryptoLowChange: [],
  setCryptoLowChange: () => {},
  lastListingCrypto: [],
  setlastListingCrypto: () => {},
  topVolume: [],
  setTopVolume: () => {},
  buyOrSell: false,
  setBuyOrSell: () => {},
  priceCryptoSelect: 0,
  setPriceCryptoSelect: () => {},
  amountBuy: 0,
  setAmountBuy: () => {},
  loading: false,
  setLoading: () => {},
  responseSearchData: "",
  setResponseSearchData: () => {},
  searchData: "",
  setSearchData: () => {},
};

export const AppContext = createContext<ContextProps>(initialValue);

export function AppContextProvider({ children }: ChildrenProps) {
  //---------------cryptos---------------------
  const [cryptos, setCryptos] = useState<any>(initialValue.cryptos);
  const [cryptoHighChange, setCryptoHighChange] = useState(initialValue.cryptoHighChange);
  const [cryptoLowChange, setCryptoLowChange] = useState(initialValue.cryptoLowChange);
  const [lastListingCrypto, setlastListingCrypto] = useState(initialValue.lastListingCrypto);
  const [topVolume, setTopVolume] = useState(initialValue.topVolume);

  useEffect(() => {
    fetchCryptos();
  }, []);

  const fetchCryptos = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `f00c50b32amsh870af7005927c13p198a37jsn6cf946d213f5`,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
        options
      );

      const data = await response.json();

      // all cryptos
      setCryptos(data.data.coins);

      // Récupération de l'objet de crypto-monnaie ayant le taux de change le plus haut
      const strongest = data.data.coins.reduce((strongest: CryptosProps, crypto: CryptosProps) => {
        if (crypto.change > strongest.change) {
          return crypto;
        }
        return strongest;
      });
      setCryptoHighChange(strongest);

      // Récupération de l'objet de crypto-monnaie ayant le taux de change le plus bas
      const lowCrypto = data.data.coins.reduce((strongest: CryptosProps, crypto: CryptosProps) => {
        if (Number(crypto.change) < Number(strongest.change)) {
          return crypto;
        }
        return strongest;
      });
      setCryptoLowChange(lowCrypto);

      // Récupération dernier listing
      const lastListing = data.data.coins.reduce(
        (strongest: CryptosProps, crypto: CryptosProps) => {
          if (crypto.listedAt > strongest.listedAt) {
            return crypto;
          }
          return strongest;
        }
      );
      setlastListingCrypto(lastListing);

      // Récupération le plus gros volume 24h
      const volumeTop = data.data.coins.reduce((strongest: CryptosProps, crypto: CryptosProps) => {
        if (crypto.marketCap > strongest.marketCap) {
          return crypto;
        }
        return strongest;
      });
      setTopVolume(volumeTop);
    } catch (err) {
      console.log(err);
    }
  };

  //----------------operation buy - sell-----------------------------
  const [buyOrSell, setBuyOrSell] = useState(false);
  const [priceCryptoSelect, setPriceCryptoSelect] = useState(initialValue.priceCryptoSelect);
  const [amountBuy, setAmountBuy] = useState(initialValue.amountBuy);

  //-----------------------Search------------------------------
  const [searchData, setSearchData] = useState(initialValue.searchData);
  const [responseSearchData, setResponseSearchData] = useState(initialValue.responseSearchData);
  const [loading, setLoading] = useState(initialValue.loading);

  return (
    <AppContext.Provider
      value={{
        cryptos,
        cryptoHighChange,
        cryptoLowChange,
        lastListingCrypto,
        topVolume,
        buyOrSell,
        setBuyOrSell,
        priceCryptoSelect,
        setPriceCryptoSelect,
        amountBuy,
        setAmountBuy,
        responseSearchData,
        setResponseSearchData,
        loading,
        setLoading,
        searchData,
        setSearchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
