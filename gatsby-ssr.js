const React = require('react');
const Layout = require('./src/components/layout').default;

exports.wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
};