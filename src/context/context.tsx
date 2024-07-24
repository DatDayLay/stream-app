import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";

export type Movie = {
  id: number;
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  cast: { name: string; role: string }[];
  rating: number;
  duration_minutes: number;
  synopsis: string;
  thumbnail_horizontal: string;
  thumbnail_vertical: string;
};

export interface MovieContextInterface {
  movies: Movie[];
  setMovies: Dispatch<SetStateAction<Movie[]>>;
  navToggle: boolean;
  setNavToggle: Dispatch<SetStateAction<boolean>>;
  handleNavToggle: () => void;
  isDesktop: boolean;
  setIsDesktop: Dispatch<SetStateAction<boolean>>;
}
const defaultState = {
  movies: [],
  setMovies: () => {},
  navToggle: false,
  setNavToggle: () => {},
  handleNavToggle: () => {},
  isDesktop: window.innerWidth > 768,
  setIsDesktop: () => {},
} as MovieContextInterface;
export const GlobalContext = createContext<MovieContextInterface>(defaultState);
type GlobalStateProps = {
  children: ReactNode;
};
const GlobalState = ({ children }: GlobalStateProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

  const handleNavToggle = () => {
    setNavToggle((prevState) => !prevState);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setNavToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("https://moviedataa.onrender.com/movies");
        const data: Movie[] = await res.json();

        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        movies,
        setMovies,
        navToggle,
        setNavToggle,
        handleNavToggle,
        isDesktop,
        setIsDesktop,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
