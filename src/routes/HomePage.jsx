import CreatePost from "../components/Posts/CreatePost";
import TimeFeed from "../components/Feeds/TimeFeed";
import TrendFeed from "../components/Feeds/TrendFeed";
import { useSelector, useDispatch } from "react-redux";
import { getListOfPosts } from "../store/posts/postsSlice";
import "../styles/home.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const posts = useSelector((store) => store.posts);
  const auth = useSelector((store) => store.auth);
  const [filter, setFilter] = useState("time");
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.status === "fulfilled") {
      dispatch(getListOfPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status]);
  return (
    <>
      <div className='homepage'>
        <div className='posts'>
          <CreatePost />
          <section className='timeline'>
            <div className='timeline-head'>
              <h5 className='h6 timeline-title'>Timeline</h5>
              <div className='input'>
                <select
                  name='filter'
                  id='filter'
                  className='filter btn btn-ghost'
                  aria-label='filter'
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}>
                  <option className='btn btn-ghost option' value='time'>
                    Time
                  </option>
                  <option className='option' value='trend'>
                    Trending
                  </option>
                </select>
              </div>
            </div>
            {filter === "time" && <TimeFeed posts={posts} />}
            {filter === "trend" && <TrendFeed posts={posts} />}
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
