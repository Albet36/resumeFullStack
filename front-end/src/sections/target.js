import { useContext, useEffect } from 'react';
import { Contexto } from '../appContext';
import { useDispatch, useSelector } from "react-redux";
import { getDataMe } from '../redux/meData.slice';
export default function Target() {
  const { setIsOpen } = useContext(Contexto);
  const { data,loading } = useSelector((state) => ({ ...state.meData }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMe());
  }, []);


  if (loading) {
    return <h2>Loading...</h2>;
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="container">
   {
    data && data.map(item => item.target?.map(val => {
        return(
          <div className="containerCont sectionCont sectionContAbout">
          <div id="target" className="target"></div>
          <header>
            <h2>Target</h2>
          </header>
  
          <p>
          {val.desire}
          </p>
          <p>
          
          {val.target}
            <br />
          </p>
          <p style={{marginTop:'10'}}>
          {val.quotations}
          </p>

        </div>
        )
      }))
   }
    </section>
  );
}
