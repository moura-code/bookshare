import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BookContext = createContext([]);
export function BOOK({ children }) {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user");
  const [loding, setloding] = useState(false);
  const [infomation, setInformation] = useState({});
  useEffect(() => {
    return () => {
      if (token) {
        const getinformation = async (userId) => {
          setloding(true);
          const u = await axios.get(
            "http://localhost:5000/api/books/user/" + userId,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setInformation(await u);
          setloding(false);
        };
        getinformation(userId);
      } else {
      }
    };
  }, []);

  return (
    <BookContext.Provider value={{ loding, userId, infomation }}>
      {children}
    </BookContext.Provider>
  );
}
