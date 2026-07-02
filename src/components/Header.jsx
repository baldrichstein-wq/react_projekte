export default function Header({ itemCount }) {
  return (
    <header className="app-header">
      <h1>Mini-Hub</h1>
      <div className="item-count">
        {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
      </div>
    </header>
  );
}
