<?php
// src/DataPersister/UserDataPersister.php

namespace App\DataPersister;

use App\Entity\Task;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 *
 */
class TaskDataPersister implements ContextAwareDataPersisterInterface
{
    private $entityManager;
    private $tokenStorage;
    public function __construct(
        EntityManagerInterface $entityManager,
        TokenStorageInterface $tokenStorage = null
    ) {
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($data, array $context = []): bool
    {
        return $data instanceof Task;
    }


    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {
        $task = (Task) $data;
        if($task->getUser()->getUsername() != $this->getUser()->getUsername()) {
            return new  AccessDeniedException(); 
        }
        $this->entityManager->remove($data);
        $this->entityManager->flush();
    }

    public function getUser()
    {
        if (!$this->tokenStorage) {
            throw new \LogicException('The SecurityBundle is not registered in your application.');
        }

        if (null === $token = $this->tokenStorage->getToken()) {
            return;
        }

        if (!is_object($user = $token->getUser())) {
            // e.g. anonymous authentication
            return;
        }

        return $user;
    }
}