import { Me } from '/imports/api/me';

Migrations.add({
    version: 1,
    name: 'Adding singular me record to database.',
    up: function() {
        Me.insert({
            name: "",
            projectOrder: [],
        })
    }
});