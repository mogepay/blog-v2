import { Button, Result } from 'antd';
import React from 'react';
import { router, Redirect } from 'umi';

const NoFoundPage: React.FC<{ location: { pathname: string } }> = ({ location }) => {
  if (location.pathname === '/') {
    return <Redirect to="/articles/list" />;
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => router.push('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoFoundPage;
