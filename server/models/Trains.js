module.exports = (sequelize, DataTypes) => {

    const Train = sequelize.define('Train', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tid: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Train;
}