import React from 'react';
import clasess from './CheckoutSummary.module.scss';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

function CheckoutSummary(props) {
  return (
    <div className={clasess.CheckoutSummary}>
      <h1>We hope it taste well!!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked={props.onCheckoutCancelled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.onCheckoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
}

export default CheckoutSummary;
