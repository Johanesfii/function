import React from 'react';
import '../style/searchPage.css';

export default function SearchPage({setSearch}) {

    const searchNews = (e) => {
        setSearch(e.target.value)
    }

  return (
          <div>
            <form>
            <input
              type="text"
              placeholder="Cari Berita..."
              onChange={searchNews}
            />
            </form>
          </div>
  )
        }
