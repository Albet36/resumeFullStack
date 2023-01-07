import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataMe } from '../redux/meData.slice';

export default function CareAbout() {
  const { data, loading } = useSelector((state) => ({ ...state.meData }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMe());
  }, []);

  return (
    <section className="sectionCont sectionContExperience">
      <div id="careAbout" className="target"></div>
      <header>
        <h2>CareAbout</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            {data &&
              data.map((item) =>
                item.careAbout.map((val) => {
                  return (
                    <div className="cardCont">
                      <ul>           
                        <li>
                          <span>{val.description}</span>
                        </li>
                      </ul>
                    </div>
                  );
                })
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
