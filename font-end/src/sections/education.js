import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataMe } from '../redux/meData.slice';

export default function Education() {
  const { data, loading } = useSelector((state) => ({ ...state.meData }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMe());
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            {data &&
              data.map((item) =>
                item.education.map((val) => {
                  return (
                    <div className="cardCont">
                      <h5>
                        <span>
                          {' '}
                          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
                          {val.dateStart} - {val.dateEnd}
                        </span>
                      </h5>
                      <h3>{val.name}</h3>
                      <h4>{val.position}</h4>
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
