import { useState } from 'react';
import './App.css';

function App() {
  const [showSelectedItems, setShowSelectedItems] = useState(false);
  const [values, setvalues] = useState([
    {
      id: 2,
      title: "Page 1",
      checked: false,
    },
    {
      id: 3,
      title: "Page 2",
      checked: false,
    },
    {
      id: 4,
      title: "Page 3",
      checked: false,
    },
    {
      id: 5,
      title: "Page 4",
      checked: false,
    }
  ]);
  const handleCheckAll = () => {
    const allChecked = values.every((cb) => cb.checked);
    setvalues(values.map((cb) => ({ ...cb, checked: !allChecked })));
  };

  const handleCheckboxChange = (id) => {
    setvalues(
      values.map((cb) =>
        cb.id === id ? { ...cb, checked: !cb.checked } : cb
      )
    );
  };

  console.log(values);
  return (
    <div className="App">
      <div className='container'>
        <div className='tile-header'>
          <div className='tile'>
            <p className='title'>All pages</p>
            <label>
              <input type="checkbox" className='checkbox' id="custom-checkbox" onClick={handleCheckAll} />
              <div className="checkbox-container">
                <div className="checkmark"></div>
              </div>
            </label>
          </div>
        </div>
        <div className='border-bottom'></div>
        <div className='tile-content'>
          {
            values.map((tile, index) => {
              return (
                <div className='tile' key={index}>
                  <p className='title'>{tile.title}</p>
                  <label>
                    <input type="checkbox" className={`checkbox`} checked={tile.checked} id="custom-checkbox" onClick={() => handleCheckboxChange(tile.id)} />
                    <div className="checkbox-container">
                      <div className="checkmark"></div>
                    </div>
                  </label>
                  {/* <input type='checkbox' className='checkbox' onChange={(e) => {
                    if (e.target.checked) {
                      setvalues([...values, tile.id]);
                    } else {
                      setvalues(values.filter(id => id !== tile.id));
                    }
                  }}
                  /> */}
                </div>
              )
            })
          }
        </div>
        <div className='border-bottom'></div>
        <button className='button' onClick={
          () => setShowSelectedItems(!showSelectedItems)
        }>{showSelectedItems ? "Hide" : "Done"}</button>
        {
          showSelectedItems &&
          <div className='selected-items'>
            <div className='border-bottom'></div>
            <p className='selected-items-text'>{values.filter(
              tile => tile.checked
            ).length > 0 ? "Selected Items" : "No items selected"}</p>
            <div className='selected-items-tiles'>
              {
                values.filter(tile => tile.checked).map((tile, index) => {
                  return (
                    <div className='selected-item-tile' key={index}>
                      <p className='title'>{tile.title}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
