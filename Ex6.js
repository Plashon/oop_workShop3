class Resident {
  name = " ";
  province = " ";
  isAvailable = true;
  rent = 0;

}

class Condo extends Resident {
  roomNumber = "";
  hasFacilities = true;
  hasLegalEntity = true;

}

class Towehouse extends Resident{
    floors = 0;
}
class House extends Resident{
    area = 0;
}