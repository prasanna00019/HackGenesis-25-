import express from 'express';
import { AddEmotionEntry, AddGratitudeEntry, DeleteEmotionEntryById, DeleteGratitudeEntryById, getAllEmotionEntries, getAllGratitudeEntries, UpdateEmotionEntryById, UpdateGratitudeEntryById } from '../controllers/JournalControllers.js';
const router=express.Router();
router.post('/AddGratitudeEntry/:userId',AddGratitudeEntry);
router.get('/GetAllGratitudeEntries/:userId',getAllGratitudeEntries);
router.delete('/DeleteGratitudeEntry/:entryId/:userId',DeleteGratitudeEntryById);
router.put('/UpdateGratitudeEntry/:entryId/:userId',UpdateGratitudeEntryById);
router.post('/AddEmotionalJournalEntry/:userId',AddEmotionEntry);
router.get('/GetAllEmotionalJournalEntries/:userId',getAllEmotionEntries);
router.delete('/DeleteEmotionalJournalEntry/:entryId/:userId',DeleteEmotionEntryById);
router.put('/UpdateEmotionalJournalEntry/:entryId/:userId',UpdateEmotionEntryById);
export default router;