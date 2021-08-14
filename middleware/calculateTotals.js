const calculateTotals = (req, res, next) => {
  const { itemList } = req.body;

  const itemListNumbers = itemList.map((item) => {
    const { qty, price } = item;
    return { ...item, qty: Number(qty), price: Number(price) };
  });
  const total = Number(
    itemListNumbers
      .reduce((prev, current) => {
        const { qty, price } = current;
        prev += qty * price;
        return prev;
      }, 0)
      .toFixed(2)
  );

  req.body.itemList = itemListNumbers;
  req.body.total = total;

  next();
};

module.exports = calculateTotals;
