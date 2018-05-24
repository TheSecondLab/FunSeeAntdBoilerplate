const serviceConfig = {
  dev: {
    zaEval: {
      domain: 'http://10.253.9.56:64530'
    },
    zaNina: {
      domain: 'http://10.253.110.64:37040'
    },
    flyingPhoenixApi: {
      domain: 'http://11251-tac-utils-flying-phoenix.test.za.net'
    }
  },
  test: {
    zaEval: {
      domain: 'http://10.253.9.56:64530'
    },
    zaNina: {
      domain: 'http://10.253.110.64:37040'
    },
    flyingPhoenixApi: {
      domain: 'http://11251-tac-utils-flying-phoenix.test.za.net'
    }
  },
  pre: {
    zaEval: {
      domain: 'http://10.139.49.99:8080'
    },
    zaNina: {
      domain: 'http://10.253.144.106:60300'
    },
    flyingPhoenixApi: {
      domain: 'http://tac-utils-flying-phoenix.pre.za.net'
    }
  },
  prd: {
    zaEval: {
      domain: 'http://100.112.35.130'
    },
    zaNina: {
      domain: 'http://10.253.144.106:60300'
    },
    flyingPhoenixApi: {
      domain: 'http://tac-utils-flying-phoenix.prd.za.net'
    }
  }
};

export default serviceConfig;
