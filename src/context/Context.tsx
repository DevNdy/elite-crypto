import { createContext, useEffect, useState } from "react";
import axios from "axios";

interface ChildrenProps {
  children: React.ReactNode;
}

type ContextProps = {
  cryptos: any;
  nbrCoins: number;
  setNbrCoins: (newState: number) => void;
  cryptoHighChange: any;
  cryptoLowChange: any;
  lastListingCrypto: any;
  topVolume: any;
};

const initialValue = {
  cryptos: [],
  nbrCoins: 10,
  setNbrCoins: () => {},
  cryptoHighChange: [],
  setCryptoHighChange: () => {},
  cryptoLowChange: [],
  setCryptoLowChange: () => {},
  lastListingCrypto: [],
  setlastListingCrypto: () => {},
  topVolume: [],
  setTopVolume: () => {},
};

export const AppContext = createContext<ContextProps>(initialValue);

export function AppContextProvider({ children }: ChildrenProps) {
  //cryptos:
  const [cryptos, setCryptos] = useState<any>(initialValue.cryptos);
  const [cryptoHighChange, setCryptoHighChange] = useState(initialValue.cryptoHighChange);
  const [cryptoLowChange, setCryptoLowChange] = useState(initialValue.cryptoLowChange);
  const [lastListingCrypto, setlastListingCrypto] = useState(initialValue.lastListingCrypto);
  const [topVolume, setTopVolume] = useState(initialValue.topVolume);
  const [nbrCoins, setNbrCoins] = useState(initialValue.nbrCoins);

  useEffect(() => {
    fetchCryptos();
  }, []);

  const fetchCryptos = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "f00c50b32amsh870af7005927c13p198a37jsn6cf946d213f5",
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
      const strongest = data.data.coins.reduce((strongest: any, crypto: any) => {
        if (crypto.change > strongest.change) {
          return crypto;
        }
        return strongest;
      });
      setCryptoHighChange(strongest);

      // Récupération de l'objet de crypto-monnaie ayant le taux de change le plus bas
      const lowCrypto = data.data.coins.reduce((strongest: any, crypto: any) => {
        if (Number(crypto.change) < Number(strongest.change)) {
          return crypto;
        }
        return strongest;
      });
      setCryptoLowChange(lowCrypto);

      // Récupération dernier listing
      const lastListing = data.data.coins.reduce((strongest: any, crypto: any) => {
        if (crypto.listedAt > strongest.listedAt) {
          return crypto;
        }
        return strongest;
      });
      setlastListingCrypto(lastListing);

      // Récupération le plus gros volume 24h
      const volumeTop = data.data.coins.reduce((strongest: any, crypto: any) => {
        if (crypto.marketCap > strongest.marketCap) {
          return crypto;
        }
        return strongest;
      });
      setTopVolume(volumeTop);

      //-----
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cryptos,
        nbrCoins,
        setNbrCoins,
        cryptoHighChange,
        cryptoLowChange,
        lastListingCrypto,
        topVolume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
