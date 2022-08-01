import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { KontenItem } from "./KontenItem";
import SearchPage from "./SearchPage";

export default function Konten() {
  const [articles, setArticles] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${search}&country=us&category=business&apiKey=d44c853657804604bf1f092a0dae89fd`
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, [search]);


  return (
    <div>
      <SearchPage
             setSearch={setSearch}
             />
             <div>
             {articles.map((article) => {
             
        return (
             
            <KontenItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
           
          
        );
             })}
             </div>
             </div>
      )
      }
      

