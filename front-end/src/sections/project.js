import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataMe } from '../redux/meData.slice';

export default function Project() {
  const { data, loading } = useSelector((state) => ({ ...state.meData }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMe());
  }, []);

  return (
    <section className="sectionCont sectionContExperience">
      <div id="project" className="target"></div>
      <header>
        <h2>Project</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            {data &&
              data.map((item) =>
                item.project.map((val) => {
                  return (
                    <div className="cardCont">
                      <h5>
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
                          {val.dateStart} - {val.dateEnd}
                        </span>
                      </h5>
                      <h3>{val.name}</h3>
                      <h4>{val.position}</h4>
                      <ul>
                      <li>
                          <span>Công nghệ sử dụng:{val.technologyUsed}</span>
                        </li>
                        <li>
                          <span>{val.description}</span>
                        </li>
                        <li>
                        <span>Chi tiết: </span>
                        <span>{val.detail}</span>
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
