import Service from 'components/service/Service';
import React, { PureComponent } from 'react';

class Services extends PureComponent {
  render() {
    return (
      <div className="flex gap-20 flex-wrap justify-center">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    );
  }
}

export default Services;
