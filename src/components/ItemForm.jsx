import { useState } from 'react';

export default function ItemForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const tags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t !== '');

    onAdd({ title: title.trim(), url: url.trim(), tags });

    setTitle('');
    setUrl('');
    setTagsInput('');
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Neues Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">Titel *</label>
          <input
            id="title"
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="React Docs"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="url">URL (optional)</label>
          <input
            id="url"
            className="form-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="tags">Tags (kommagetrennt)</label>
          <input
            id="tags"
            className="form-input"
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="react, docs, frontend"
          />
        </div>

        <button type="submit" className="btn-submit">
          Hinzufügen
        </button>
      </form>
    </div>
  );
}
