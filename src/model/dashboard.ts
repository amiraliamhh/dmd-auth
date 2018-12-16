import mongoose from 'mongoose';

const DashboardSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  widgets: {
    type: [String],
    default: []
  },
  configs: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
});

export default mongoose.model('dashboards', DashboardSchema);