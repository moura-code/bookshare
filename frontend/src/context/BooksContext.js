import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./appContext";
export const BookContext = createContext([]);
export function BOOK({ children }) {
  const { seterr, navigate } = useContext(AppContext);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user");
  const [loding, setloding] = useState(false);
  const [infomation, setInformation] = useState({});
  const [mybooks, setmybooks] = useState([]);
  const [content, setcontent] = useState("");
  const [bok, setnok] = useState([]);
  const [title, settitle] = useState("");

  const getinformation = async (userId) => {
    const info = await axios.get(
      "http://localhost:5000/api/books/user/" + userId,
      {
        headers: {
          Authorization: token,
        },
      }
    );
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
    const allboks = axios.get("http://localhost:5000/api/books/allbooks/", {
      headers: {
        Authorization: token,
      },
    });
    const c = await allboks;
    setloding(true);
    setnok(c.data.all);
    setInformation(info);
    setmybooks(mybook);
    setloding(false);
  };
  const newBook = async () => {
    const name = await axios.get(
      "http://localhost:5000/api/books/user/" + userId,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    axios
      .post(
        "http://localhost:5000/api/books/allbooks/",
        {
          userid: userId,
          title: title,
          content: content,
          username: name.data.id.username,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((user) => {
        console.log(user);
        seterr("");
        navigate("/");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        seterr(err.response.data.msg);
      });
  };

  useEffect(() => {
    if (token) {
      getinformation(userId);
    } else {
    }
  }, [token, userId]);

  return (
    <BookContext.Provider
      value={{
        loding,
        infomation,
        mybooks,
        bok,
        content,
        setcontent,
        title,
        settitle,
        newBook,
        token,
        seterr,
        navigate,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
