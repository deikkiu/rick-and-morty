import { describe, it, expect } from 'vitest';
import { getIdFromUrl } from '@/shared/lib/helpers';

describe('getIdFromUrl', () => {
  it('should extract id from URL', () => {
    const url = 'https://rickandmortyapi.com/api/character/1';
    const id = getIdFromUrl(url);
    expect(id).toBe('1');
  });

  it('should return null for invalid URL', () => {
    const url = 'invalid-url';
    const id = getIdFromUrl(url);
    expect(id).toBe(null);
  });
});
