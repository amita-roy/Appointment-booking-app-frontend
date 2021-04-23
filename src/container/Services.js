import Service from 'components/service/Service';
import React, { PureComponent } from 'react';

class Services extends PureComponent {
  render() {
    return (
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-12">
        <Service />
        <Service />
        <Service />
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
