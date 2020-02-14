using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameControl : MonoBehaviour
{

    public GameObject lives1, lives2, lives3, gameOver, finalGameScore;
    public static int health;

  
    // Start is called before the first frame update
    void Start()
    {
        health = 3;
        lives1.gameObject.SetActive(true);
        lives2.gameObject.SetActive(true);
        lives3.gameObject.SetActive(true);
        gameOver.gameObject.SetActive(false);
        finalGameScore.gameObject.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (health > 3)
            health = 3;

        switch (health)
        {
            case 3:
                lives1.gameObject.SetActive(true);
                lives2.gameObject.SetActive(true);
                lives3.gameObject.SetActive(true);
                break;
            case 2:
                lives1.gameObject.SetActive(true);
                lives2.gameObject.SetActive(true);
                lives3.gameObject.SetActive(false);
                break;
            case 1:
                lives1.gameObject.SetActive(true);
                lives2.gameObject.SetActive(false);
                lives3.gameObject.SetActive(false);
                break;
            case 0:
                lives1.gameObject.SetActive(false);
                lives2.gameObject.SetActive(false);
                lives3.gameObject.SetActive(false);
                gameOver.gameObject.SetActive(true);
                finalGameScore.gameObject.SetActive(true);
                Time.timeScale = 0;
                break;
        }
    }
}
