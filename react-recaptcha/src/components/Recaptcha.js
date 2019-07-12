import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-v3';

class ExampleComponent extends Component {
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, '<= your recaptcha token');
  }
  render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
          size="normal"
          render="explicit"
          sitekey="6LdD4nwUAAAAAEDthkJSVmpZJla2thUlbLBQJIDt"
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component.{' '}
          <br />
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  }
}
export default ExampleComponent;
