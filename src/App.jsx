import { useState } from 'react';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { seedItems } from './data/seedItems';
import './App.css';

function App() {
  const [items, setItems] = useLocalStorageState('mini-hub-items', seedItems);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Multi-select state
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  // Alle einzigartigen Tags sammeln
  const allTags = [...new Set(
    items.flatMap(item => item.tags || [])
  )].sort();

  // Kombinierte Filterlogik
  const filteredItems = items.filter(item => {
    // Suchfilter
    let matchesSearch = true;
    if (searchTerm.trim() !== '') {
      const search = searchTerm.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(search);
      const tagsMatch = item.tags?.some(tag =>
        tag.toLowerCase().includes(search)
      );
      matchesSearch = titleMatch || tagsMatch;
    }

    // Tag-Filter
    let matchesTag = true;
    if (selectedTag !== '') {
      matchesTag = item.tags?.includes(selectedTag) || false;
    }

    return matchesSearch && matchesTag;
  });

  function handleAddItem(newItemData) {
    const newItem = {
      ...newItemData,
      id: crypto.randomUUID(),
      favorite: false,
      createdAt: new Date().toISOString()
    };
    setItems(prevItems => [newItem, ...prevItems]);
  }

  function handleDeleteItem(id) {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function handleToggleFavorite(id) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  }

  function handleStartEdit(id) {
    setEditingId(id);
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  function handleUpdateItem(id, updatedData) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
    setEditingId(null);
  }

  function handleToggleSelectMode() {
    setIsSelectMode(prev => !prev);
    setSelectedIds([]);
  }

  function handleToggleSelection(id) {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  function handleBulkDelete() {
    setItems(prevItems => prevItems.filter(item => !selectedIds.includes(item.id)));
    setIsSelectMode(false);
    setSelectedIds([]);
  }

  return (
    <div className="app-container">
      <Header itemCount={items.length} />
      <main className="app-main">
        <aside className="app-sidebar">
          <ItemForm onAdd={handleAddItem} />
        </aside>
        <section className="app-content">
          <input
            type="text"
            className="search-input"
            placeholder="Items durchsuchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {allTags.length > 0 && (
            <div className="tag-filter">
              <button
                className={`tag-filter-btn ${selectedTag === '' ? 'tag-filter-btn--active' : ''}`}
                onClick={() => setSelectedTag('')}
              >
                Alle
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter-btn ${selectedTag === tag ? 'tag-filter-btn--active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          <div className="selection-bar">
            {!isSelectMode ? (
              <button className="btn-submit btn-api" onClick={handleToggleSelectMode} style={{ width: 'auto', padding: '0.5rem 1rem' }}>
                Auswählen
              </button>
            ) : (
              <div className="selection-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span>{selectedIds.length} ausgewählt</span>
                <button 
                  className="btn-submit" 
                  style={{ width: 'auto', padding: '0.5rem 1rem', background: 'var(--danger-color)', borderColor: 'var(--danger-color)' }}
                  onClick={handleBulkDelete}
                  disabled={selectedIds.length === 0}
                >
                  Löschen
                </button>
                <button 
                  className="edit-btn edit-btn--cancel" 
                  onClick={handleToggleSelectMode}
                >
                  Abbrechen
                </button>
              </div>
            )}
          </div>

          <ItemList
            items={filteredItems}
            onDelete={handleDeleteItem}
            onToggleFavorite={handleToggleFavorite}
            editingId={editingId}
            onStartEdit={handleStartEdit}
            onCancelEdit={handleCancelEdit}
            onUpdateItem={handleUpdateItem}
            isSelectMode={isSelectMode}
            selectedIds={selectedIds}
            onToggleSelection={handleToggleSelection}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
