import ItemCard from './ItemCard';

export default function ItemList({
  items,
  onDelete,
  onToggleFavorite,
  editingId,
  onStartEdit,
  onCancelEdit,
  onUpdateItem,
  isSelectMode,
  selectedIds,
  onToggleSelection
}) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h3>Keine Items gefunden</h3>
        <p>Versuche es mit einem anderen Suchbegriff oder füge ein neues Item hinzu!</p>
      </div>
    );
  }

  return (
    <div className="items-grid">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          isEditing={editingId === item.id}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          onStartEdit={onStartEdit}
          onCancelEdit={onCancelEdit}
          onUpdateItem={onUpdateItem}
          isSelectMode={isSelectMode}
          isSelected={selectedIds?.includes(item.id)}
          onToggleSelection={onToggleSelection}
        />
      ))}
    </div>
  );
}
