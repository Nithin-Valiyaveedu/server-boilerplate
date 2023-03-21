const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: false,
    }
  );

  const ContactInfo = sequelize.define(
    'ContactInfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  const Tweet = sequelize.define(
    'Tweet',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  // one-to-one => hasOne, belongsTo

  User.hasOne(ContactInfo, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  ContactInfo.belongsTo(User);

  //one-to-many => hasMany, belongsTO

  User.hasMany(Tweet, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Tweet.belongsTo(User);

  //many-to-many => belongToMany

  // Example

  // Actor.belongsToMany(Movie, {
  //   through: 'Actors_Movies',
  // });
  // Movie.belongsToMany(Actor, {
  //   thorugh: "Actor_Movies"
  // });

  User.belongsToMany(User, {
    as: 'User',
    foreignKey: 'UserId',
    through: 'Follow',
  });

  User.belongsToMany(User, {
    as: 'Followed',
    foreignKey: 'FollowedId',
    through: 'Follow',
  });

  sequelize.sync({ alter: true });
};
