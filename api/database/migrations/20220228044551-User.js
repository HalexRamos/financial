module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allownull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
