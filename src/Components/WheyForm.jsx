import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import CalcButton from "./CalcButton";
import closeIcon from "../Images/close-icon.svg";
import "../Styles/Components/WheyForm.scss";

function WheyForm(props) {
  const {
    comparison,
    setComparison,
    brand,
    setBrand,
    weight,
    setWeight,
    serving,
    setServing,
    protein,
    setProtein,
    price,
    setPrice,
    calculate,
    servingPrice,
    servingQuant,
    totalProtein,
    proteinConcentration,
    proteinPrice,
    updateArray,
    resetForm
  } = useContext(WheyContext);

  const { ind } = props;
  const i = Number(ind);

  const handleBrand = (event) => {
    const { value } = event.target;
    const newValue = updateArray(brand, value, i);
    setBrand(newValue);
  }

  const handleWeight = (event) => {
    const { value } = event.target;
    const newValue = updateArray(weight, value, i);
    setWeight(newValue);
  }

  const handleServing = (event) => {
    const { value } = event.target;
    const newValue = updateArray(serving, value, i);
    setServing(newValue);
  }

  const handleProtein = (event) => {
    const { value } = event.target;
    const newValue = updateArray(protein, value, i);
    setProtein(newValue);
  }

  const handlePrice = (event) => {
    const { value } = event.target;
    const newValue = updateArray(price, value, i);
    setPrice(newValue);
  }

  const closeForm = (event) => {
    event.preventDefault();
    resetForm(event);
    setComparison(false);
  }

  const paragraph1 = <p data-testid={ `br-info-test-${ ind }` } className="whey-info">Informações do whey <strong>{ brand[i] }</strong>:</p>;
  const paragraph2 = <p data-testid={ `sq-info-test-${ ind }` } className="whey-info">Rende <strong>{ servingQuant[i] }</strong> porções por embalagem</p>;
  const paragraph3 = <p data-testid={ `sp-info-test-${ ind }` } className="whey-info">Preço por porção: <strong>R${ servingPrice[i] }</strong></p>;
  const paragraph4 = <p data-testid={ `tp-info-test-${ ind }` } className="whey-info">Cada embalagem possui <strong>{ totalProtein[i] }g</strong> de proteína, tendo assim uma concentração de <strong>{ proteinConcentration[i] }%</strong></p>;
  const paragraph5 = <p data-testid={ `pp-info-test-${ ind }` } className="whey-info">Você paga <strong>R${proteinPrice[i]}</strong> só pela proteína do produto</p>;

  return (
    <form data-testid={ `form-test-${ ind }` } className="whey-main">
      <div className={`whey-conditionals-${ind}`}>
        { (i === 1 && !calculate) &&
          <button data-testid="close-button-test" onClick={ closeForm } className="whey-closebtn">
            <img className="whey-close-img" src={ closeIcon } alt="close button" />
          </button>
        }
        {
          calculate ? (
            <div className="whey-info-wrap">
              { paragraph1 }
              { paragraph2 }
              { paragraph3 }
              { paragraph4 }
              { paragraph5 }
            </div>
          )
        :
          (
            <div data-testid={ `form-main-test-${ind}` } className="whey-form-main">
              <label className="whey-labels">
                Marca:
                <br />
                <input
                  data-testid={ `brand-input-test-${ind}` }
                  className="whey-inputs" 
                  type="text"
                  value={ brand[i] }
                  onChange={ handleBrand }
                  />
              </label>
              <label className="whey-labels">
                Peso total em gramas:
                <br />
                <input
                  data-testid={ `weight-input-test-${ind}` }
                  className="whey-inputs"
                  type="number"
                  value={ weight[i] }
                  onChange={ handleWeight }
                  />
              </label>
              <label className="whey-labels">
                Porção em gramas:
                <br />
                <input
                  data-testid={ `serving-input-test-${ind}` }
                  className="whey-inputs"
                  type="number"
                  value={ serving[i] }
                  onChange={ handleServing }
                  />
              </label>
              <label className="whey-labels">
                Proteína por porção:
                <br />
                <input
                  data-testid={ `protein-input-test-${ind}` }
                  className="whey-inputs"
                  type="number"
                  value={ protein[i] }
                  onChange={ handleProtein }
                  />
              </label>
              <label className="whey-labels">
                Preço:
                <br />
                <input
                  data-testid={ `price-input-test-${ind}` }
                  className="whey-inputs"
                  type="number"
                  value={ price[i] }
                  onChange={ handlePrice }
                  />
              </label>
            </div>
        ) }
        { !comparison && <CalcButton ind={ i } />}
      </div>
    </form>
  );
}

export default WheyForm;