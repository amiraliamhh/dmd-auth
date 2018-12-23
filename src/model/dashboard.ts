import mongoose from 'mongoose';

const DashboardSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  widgets: {
    type: [String],
    default: []
  },
  configs: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  visibility: {
    type: String,
    enum: [
      'public',
      'private'
    ],
    default: 'private'
  },
  theme: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
});

export default mongoose.model('dashboards', DashboardSchema);
