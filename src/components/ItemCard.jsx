import { useState, useEffect } from 'react';

export default function ItemCard({
  item,
  isEditing,
  onDelete,
  onToggleFavorite,
  onStartEdit,
  onCancelEdit,
  onUpdateItem,
  isSelectMode,
  isSelected,
  onToggleSelection
}) {
  const [editTitle, setEditTitle] = useState(item.title);
  const [editUrl, setEditUrl] = useState(item.url || '');
  const [editTags, setEditTags] = useState(item.tags?.join(', ') || '');

  useEffect(() => {
    setEditTitle(item.title);
    setEditUrl(item.url || '');
    setEditTags(item.tags?.join(', ') || '');
  }, [item]);

  function handleSave() {
    if (editTitle.trim() === '') return;

    const tags = editTags
      .split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag !== '');

    onUpdateItem(item.id, {
      title: editTitle.trim(),
      url: editUrl.trim(),
      tags: tags
    });
  }

  const dateStr = new Date(item.createdAt).toLocaleDateString();

  if (isEditing) {
    return (
      <article className="item-card">
        <div className="edit-form">
          <input
            type="text"
            className="edit-input"
            placeholder="Titel"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
          />
          <input
            type="url"
            className="edit-input"
            placeholder="URL (optional)"
            value={editUrl}
            onChange={(e) => setEditUrl(e.target.value)}
          />
          <input
            type="text"
            className="edit-input"
            placeholder="Tags (kommagetrennt)"
            value={editTags}
            onChange={(e) => setEditTags(e.target.value)}
          />
          <div className="edit-actions">
            <button
              className="edit-btn edit-btn--cancel"
              onClick={onCancelEdit}
            >
              Abbrechen
            </button>
            <button
              className="edit-btn edit-btn--save"
              onClick={handleSave}
            >
              Speichern
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article 
      className={`item-card ${isSelected ? 'item-card--selected' : ''}`}
      onClick={(e) => {
        // Prevent toggle if clicking a button or link
        if (isSelectMode && !e.target.closest('button') && !e.target.closest('a')) {
          onToggleSelection(item.id);
        }
      }}
      style={{ 
        cursor: isSelectMode ? 'pointer' : 'default',
        position: 'relative'
      }}
    >
      {isSelectMode && (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
          <input 
            type="checkbox" 
            className="checkbox-custom" 
            checked={isSelected}
            readOnly
          />
        </div>
      )}
      <div className="card-header">
        <h3 className="card-title">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            <span>{item.title}</span>
          )}
        </h3>
        <div className="card-actions">
          <button 
            className={`btn-icon btn-favorite ${item.favorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(item.id)}
            title="Favorit umschalten"
          >
            ★
          </button>
        </div>
      </div>
      
      {item.tags && item.tags.length > 0 && (
        <div className="card-tags">
          {item.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      )}
      
      <div className="card-meta">
        <span>Hinzugefügt am {dateStr}</span>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <button
            className="edit-btn edit-btn--cancel"
            onClick={() => onStartEdit(item.id)}
          >
            Bearbeiten
          </button>
          <button 
            className="edit-btn edit-btn--cancel" 
            style={{ color: 'var(--danger-color)' }}
            onClick={() => onDelete(item.id)}
          >
            Löschen
          </button>
        </div>
      </div>
    </article>
  );
}
