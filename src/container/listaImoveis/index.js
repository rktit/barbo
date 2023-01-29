import React, { useEffect, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import axios from 'axios'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { Fade } from 'react-reveal'
import ContentLoader from 'react-content-loader'

import { getAllPosts } from '../../service/state.posts'

const ImageArticle = ({ id }) => {

  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState('')
 const posts = getAllPosts()
  useEffect(() => {
    console.log('ImageArticle', id)
    getImage()
  }, [])

  const getImage = async () => {
    let img = await getAllPosts(id)
    if (!img.error) {
      setImage(img.source_url)
      setLoading(false)
    }
  }

  return !loading ? (
    <img
      src={image}
      alt="Tecnologia disruptiva"
      className="flex-initial rounded-xl md:rounded-3xl shadow-xl mb-6 mt-10 w-full h-80"
    />
  ) : (<ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="400" height="300" />
  </ContentLoader>)
}

const Article = ({ data }) => {
  console.log('Article', data)
  return (
    <Fade>
      <div className="p-6">
        <ImageArticle id={data.featured_media} />
        <span className="uppercase">Artigo</span>
        <br />
        <div className="family-bold">{data.title.rendered}</div>
        <br />
        <a
          href={`/site/artigo?id=${data.id}#${data.slug}`}
          className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 px-3 mt-5 family-bold font-small uppercase w-12 text-black tracking-widest	"
        >
          Acesse
        </a>
      </div>
    </Fade>
  );
}

function ListaImoveis_Page({ posts = [], loading = false }) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);
  return (
    <ScrollableAnchor id="artigo">
      <div className="flex px-6 py-10 items-center font-black">
        {!loading ? (
          <nav>
            {isMobile ? (
              <div className="flex flex-col items-center font-black -ml-6">
              {/* <div className="family-bold text-2xl 2xl:text-3xl tracking-wider font-black">
                Veja mais
                </div> */}
                <Splide
              className="w-screen px-10"
              options={{
                rewind: true,
                perPage: 1,
                width: '100vw',
                gap: '0rem',
                padding: '0rem',
                pagination: false,
              }}
            >
              {posts.map((post) => (
                <SplideSlide className="min-h-36">
                  <Article data={post} />
                </SplideSlide>
              ))}
            </Splide>
            </div>

            ) : (
              <article>
                <div className="flex grid grid-cols-3">
                  {posts.length > 0
                    ? posts.map((post) => <Article data={post} />)
                    : 'Não tem posts'}
                </div>
              </article>
            )}
          </nav>
        ) : (
          <div>
            <ContentLoader
              width={450}
              height={400}
              viewBox="0 0 450 400"
              backgroundColor="#f0f0f0"
              foregroundColor="#dedede"
            >
              <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
              <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
              <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
            </ContentLoader>
          </div>
        )}
      </div>
    </ScrollableAnchor>
  )
}
export default ListaImoveis_Page
