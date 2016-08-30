library mvb {
  function somefn(uint len) private {
    uint mask = 256 ** (32 - len) - 1;
  }
}
