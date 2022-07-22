import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BookContext = createContext([]);
export function BOOK({ children }) {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user");
  const [loding, setloding] = useState(false);
  const [infomation, setInformation] = useState({});
  const [mybooks, setmybooks] = useState([]);
  useEffect(() => {
    return () => {
      if (token) {
        const getinformation = async (userId) => {
          setloding(true);
          const info = await axios.get(
            "http://localhost:5000/api/books/user/" + userId,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setInformation(info);

          const my = info.data.id.listofBooks.map(async (id) => {
            const valor = await axios.get(
              "http://localhost:5000/api/books/allbooks/" + id,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            return valor.data.id;
          });
          const mybook = await Promise.all(my);
          setmybooks(mybook);

          setloding(false);
        };
        getinformation(userId);
      } else {
      }
    };
  }, [userId, token]);

  return (
    <BookContext.Provider value={{ loding, userId, infomation, mybooks }}>
      {children}
    </BookContext.Provider>
  );
}
