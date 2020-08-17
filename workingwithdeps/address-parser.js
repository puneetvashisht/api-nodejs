exports.parse = function parseOrder(order) {
    const match = order.match(/order:\s(?<order>).*address:\s(?<address>\w+\s\w+\s\w+).*payment info:\s(?<payment>\w+)/)
   return match.groups;
  }