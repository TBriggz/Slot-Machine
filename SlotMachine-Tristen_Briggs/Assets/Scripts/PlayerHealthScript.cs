using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerHealthScript : MonoBehaviour
{

    private void OnTriggerEnter2D(Collider2D target)
    {
        if (target.tag == "Enemy")
        {
            GameControl.health -= 1;
        }

    }

}
